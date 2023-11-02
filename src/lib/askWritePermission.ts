export default async function askWritePermission() {
  try {
    // The clipboard-write permission is granted automatically to pages
    // when they are the active tab. So it's not required, but it's more safe.
    const { state } = await navigator.permissions.query({
      name: 'clipboard-write' as PermissionName,
    });
    return state === 'granted';
  } catch (error) {
    // Browser compatibility / Security error (ONLY HTTPS)
    return false;
  }
}
