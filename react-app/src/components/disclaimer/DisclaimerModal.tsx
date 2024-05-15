import { Alert, Modal } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import { LocalStorageKey, getItem, saveItem } from 'src/utils/storage';

const DisclaimerModal = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'disclaimer' });
  const isAccepted = !!(getItem(LocalStorageKey.DISCLAIMER_ACCEPTED) === 'accepted');
  const [isModalOpen, setModalOpen] = useState(!isAccepted);

  const onDisclaimerAccept = () => {
    saveItem(LocalStorageKey.DISCLAIMER_ACCEPTED, 'accepted');
    setModalOpen(false);
  };

  return (
    <Modal
      title={t('disclaimerHeader')}
      open={isModalOpen}
      destroyOnClose={false}
      width={720}
      closable={false}
      footer={
        <Button
          type="primary"
          text={t('accept')}
          onClick={onDisclaimerAccept}
        />
      }
    >
      <Alert
        className="disclaimer"
        description={t('disclaimerMessage')}
        type="warning"
        showIcon
      />
    </Modal>
  );
};

export default DisclaimerModal;
