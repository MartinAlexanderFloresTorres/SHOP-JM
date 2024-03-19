import { ButtonBlack } from '@/app/shared/components/ui/Buttons';
import { Checkbox, Input, Label } from '@/app/shared/components/ui/Input';
import Modal from '@/app/shared/components/ui/Modal';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

interface ModalPasswordProps {
  onClose: () => void;
}

export default function ModalPassword({ onClose }: ModalPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Modal onClose={onClose} title="Cambiar Contraseña" description="Cambie la contraseña que utiliza para iniciar sesión." allowCloseOnTouch={true} showHeader={true} IconClose={IoClose} center={true}>
      <form className="w-full flex flex-col gap-4">
        <Input type={showPassword ? 'text' : 'password'} name="password" id="password" title="Contraseña Actual" />
        <div className="flex items-center gap-4 w-full">
          <Input type={showPassword ? 'text' : 'password'} name="newPassword" id="newPassword" title="Nueva Contraseña" />

          <Input type={showPassword ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" title="Confirmar Contraseña" />
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-sm text-gray-400 w-fit py-2" type="button" onClick={toogleShowPassword}>
            {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
            {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
          </button>
        </div>

        <ButtonBlack type="submit">Guardar Cambios</ButtonBlack>
      </form>
    </Modal>
  );
}
