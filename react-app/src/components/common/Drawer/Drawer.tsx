import { EditOutlined } from '@ant-design/icons';
import { DrawerProps, Space } from 'antd';
import { Drawer as AntdDrawer } from 'antd';
import { useState } from 'react';

import i18n from 'src/locales';

import Button from '../Button/Button';

interface Props extends DrawerProps {
  submitForm: () => void;
  isPending: boolean;
  title: string;
  children: React.ReactNode;
  className?: string;
  isCreate?: boolean;
}

const Drawer: React.FC<Props> = ({ title, children, submitForm, isPending, isCreate, ...rest }) => {
  const [open, setOpen] = useState(rest.open || false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <>
      <Button
        type="primary"
        text={isCreate ? i18n.t('globalStrings.create') : i18n.t('globalStrings.edit')}
        onClick={showDrawer}
        className="edit-button"
        icon={<EditOutlined />}
      />
      <AntdDrawer
        title={title}
        width={400}
        onClose={onClose}
        open={open}
        maskClassName="drawer-mask"
        destroyOnClose={true}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button
              type="primary"
              text={i18n.t('globalStrings.submit')}
              htmlType="submit"
              onClick={handleSubmit}
              loading={isPending}
            />
            <Button
              text={i18n.t('globalStrings.cancel')}
              onClick={onClose}
              loading={isPending}
            />
          </Space>
        }
        {...rest}
      >
        {children}
      </AntdDrawer>
    </>
  );
};

export default Drawer;
