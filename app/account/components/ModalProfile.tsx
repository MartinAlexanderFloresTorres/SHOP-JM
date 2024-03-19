import { ButtonBlack } from '@/app/shared/components/ui/Buttons';
import { Input } from '@/app/shared/components/ui/Input';
import Modal from '@/app/shared/components/ui/Modal';
import { IoClose } from 'react-icons/io5';

interface ModalProfileProps {
  onClose: () => void;
}

export default function ModalProfile({ onClose }: ModalProfileProps) {
  return (
    <Modal onClose={onClose} title="Configuración de la cuenta" description="Edite la información que utilizó para configurar su cuenta." allowCloseOnTouch={true} showHeader={true} IconClose={IoClose} center={true}>
      <form className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-4 w-full">
          <Input type="text" name="name" id="name" title="Nombre" />
          <Input type="text" name="lastname" id="lastname" title="Apellidos" />
        </div>

        <Input type="email" name="email" id="email" title="Correo Electrónico" />

        <div className="flex items-center gap-4 w-full">
          <Input type="tel" name="phone" id="phone" title="Teléfono" />
          <Input type="date" name="birthdate" id="birthdate" title="Fecha De Nacimiento" active={true} />
        </div>

        <Input type="text" name="address" id="address" title="Dirección" />

        <div className="flex items-center gap-4 w-full">
          <Input type="text" name="country" id="country" title="País" />
          <Input type="text" name="city" id="city" title="Ciudad" />
        </div>

        <ButtonBlack type="submit">Guardar Cambios</ButtonBlack>
      </form>
    </Modal>
  );
}
