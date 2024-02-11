import Swal from "sweetalert2"
import { useEffect, useState } from "react"

export const Welcome = () => {
    const [alertShown, setAlertShown] = useState(false);

    useEffect(() => {
        document.title = "EpicBooks"

        if (alertShown)
            Swal.fire({
                title: 'Informazione:',
                text: 'Questo è un alert modificato con SweetAlert',
                icon: 'info',
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                timer: 5000,
                confirmButtonText: 'Prosegui'
            })
        setAlertShown(true);
    }, [alertShown])
}

