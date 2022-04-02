import { createStandaloneToast } from '@chakra-ui/react'

/**
 * Show Toast Notification.
 * @param {string} status eg: success, error, warning, info
 * @param {string} title eg: Product added successfully.
 * @param {string} description eg: Your registration has been successful
 * @param {int} autoClose autoClose toast time in milliseconds.
 * @param {int} position toaster position to display
 * @param {string} className custom class name for toast.
 */


export const SimpleToaster = (status = "success", title, description = null, autoClose = null, position = "bottom", className = null) => {

    autoClose = (autoClose === null) ? 2000 : autoClose;

    const toast = createStandaloneToast()
    toast({
        title: title,
        description: description,
        status: status,
        duration: autoClose,
        isClosable: true,
        position: position,
    });

};