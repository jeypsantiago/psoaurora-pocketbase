<script>
    import { replace } from "svelte-spa-router";
    import { getTokenPayload } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import { addErrorToast } from "@/stores/toasts";
    import FullPage from "@/components/base/FullPage.svelte";
    import SuperuserSetupForm from "@/components/superusers/SuperuserSetupForm.svelte";

    export let params;

    let isLoading = false;
    let isValid = false;

    checkToken();

    async function checkToken() {
        if (!params?.token) {
            return replace("/login");
        }

        isLoading = true;

        try {
            const payload = getTokenPayload(params?.token);

            await ApiClient.collection("_superusers").getOne(payload.id, {
                requestKey: "installer_token_check",
                headers: { Authorization: params?.token },
            });

            isValid = true;
        } catch (err) {
            if (!err?.isAbort) {
                addErrorToast("The installer token is invalid or has expired.");

                replace("/login");
            }
        }

        isLoading = false;
    }

    function handleInvalidSession() {
        addErrorToast("The installer token is invalid or has expired.");
        replace("/login");
    }
</script>

{#if isLoading}
    <FullPage>
        <div class="block txt-center">
            <span class="loader" />
        </div>
    </FullPage>
{:else if isValid}
    <SuperuserSetupForm setupToken={params?.token} on:invalidsession={handleInvalidSession} />
{/if}
