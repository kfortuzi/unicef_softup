import { EditOutlined } from '@ant-design/icons';
import { DrawerProps, Space } from 'antd';
import { Drawer as AntdDrawer } from 'antd';
import { useState } from 'react';

import slideResumeLeft from 'src/components/profile/myResume/hooks/useSlideLeft';
import i18n from 'src/locales';

import Button from '../Button/Button';

interface Props extends DrawerProps {
  submitForm: () => void;
  isPending: boolean;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Drawer: React.FC<Props> = ({ title, children, submitForm, isPending, ...rest }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    slideResumeLeft(false);
  };

  const onClose = () => {
    setOpen(false);
    slideResumeLeft(true);
  };

  return (
    <>
      <Button
        type="primary"
        text="Edit"
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
              onClick={submitForm}
              loading={isPending}
            />
            <Button
              type="primary"
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
