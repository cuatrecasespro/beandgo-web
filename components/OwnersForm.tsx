
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface OwnersFormProps {
    onBack: () => void;
}

const OwnersForm: React.FC<OwnersFormProps> = ({ onBack }) => {
    const { t } = useLanguage();
    return (
        <div className="w-full flex flex-col items-center bg-brand-light-grey min-h-[calc(100vh-80px)]">
            <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                <div className="mb-4">
                    <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-accent transition-colors">
                        <span className="material-symbols-outlined mr-1 text-base">arrow_back</span>
                        {t.ownersForm.backButton}
                    </button>
                </div>
                <div className="flex-grow w-full h-[80vh] bg-white rounded-xl shadow-lg overflow-hidden">
                    <iframe
                        src="https://beandgo.fibery.io/@public/forms/hRt0kL04"
                        className="w-full h-full border-0"
                        title="Formulari d'accés per a propietaris de Be&Go"
                    >
                        Loading...
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default OwnersForm;
