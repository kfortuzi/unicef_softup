import { DeleteOutlined } from '@ant-design/icons';
import { UseFieldArrayRemove } from 'react-hook-form';

type Props = {
  index: number;
  remove: UseFieldArrayRemove
}

const DeleteItemButton: React.FC<Props> = ({
  index,
  remove
}) => {
  return (
    <DeleteOutlined
      onClick={(event) => {
        event.stopPropagation();
        remove(index);
      }}
      className="delete-item-button"
    />
  );
}

export default DeleteItemButton;