# Dokploy Deployment

This repository should be deployed to Dokploy as an `Application` backed by the root-level `Dockerfile`.

## Why `Application` instead of `Compose`

- This repo builds a single PocketBase binary from `examples/base`.
- There is no companion database or sidecar service required for the default setup.
- PocketBase stores its SQLite database and uploaded files in `pb_data`, so the only required runtime dependency is a persistent volume.

## Dokploy settings

- Source: this repository
- Build type: `Dockerfile`
- Dockerfile path: `./Dockerfile`
- Internal port: `8090`
- Start command override: none
- Domain/TLS: configure in Dokploy and let Traefik terminate TLS

## Persistent storage

Create a Dokploy volume and mount it to:

```text
/pb/pb_data
```

This keeps the SQLite database, uploaded files, backups, and other PocketBase runtime data across redeploys.

## Runtime behavior

The container starts PocketBase with:

```text
./pocketbase serve --http=0.0.0.0:8090 --dir=/pb/pb_data
```

This is important because PocketBase otherwise defaults to `127.0.0.1:8090` when no domain arguments are passed, which is not suitable behind container ingress.

## Optional environment variables

- `TZ` for container timezone
- any application secrets you later wire into your own hooks or custom code

## Create the first superadmin

If Dokploy doesn't expose an app terminal, run the commands on the server where Dokploy is installed.

### 1. Find the PocketBase container

List running containers:

```bash
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Image}}"
```

If you need a narrower match, filter by name:

```bash
docker ps --format "{{.ID}}\t{{.Names}}\t{{.Image}}" | grep pocketbase
```

### 2. Verify the binary path inside the container

Replace `<container>` with the container name or id from the previous step:

```bash
docker exec -it <container> ls /pb
```

You should see the `pocketbase` binary there.

### 3. Create or reset the superadmin

Run:

```bash
docker exec -it <container> /pb/pocketbase superuser upsert your@email.com "YourStrongPassword" --dir=/pb/pb_data
```

Example:

```bash
docker exec -it my-pocketbase-app /pb/pocketbase superuser upsert admin@example.com "StrongPassword123!" --dir=/pb/pb_data
```

This command will:

- create the superadmin if it doesn't exist
- update the password if the email already exists

### 4. Sign in to the admin UI

Open:

```text
https://your-domain/_/
```

Use the email and password from the `superuser upsert` command.

## Notes

- Do not use PocketBase automatic TLS inside the container when running behind Dokploy.
- If you later add `pb_public`, `pb_hooks`, or custom migrations, either bake them into the image or mount them explicitly.
- No external database is required unless you intentionally redesign the deployment away from SQLite.
