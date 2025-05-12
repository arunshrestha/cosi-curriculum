import { useState, useCallback } from 'react';

const usePopup = () => {
    const [PopupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState(null);

    const showPopup = useCallback((data) => {
        setPopupData(data);
        setPopupVisible(true);
    }, []);

    const hidePopup = useCallback(() => {
        setPopupVisible(false);
        setPopupData(null);
    }, []);

    return { PopupVisible, popupData, showPopup, hidePopup };
};

export default usePopup;