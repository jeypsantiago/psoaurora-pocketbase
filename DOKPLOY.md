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

## Notes

- Do not use PocketBase automatic TLS inside the container when running behind Dokploy.
- If you later add `pb_public`, `pb_hooks`, or custom migrations, either bake them into the image or mount them explicitly.
- No external database is required unless you intentionally redesign the deployment away from SQLite.
