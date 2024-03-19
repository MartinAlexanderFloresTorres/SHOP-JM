'use client';
import { useState } from 'react';
import Dropdown from '@shared/components/ui/Dropdown';
import { ButtonBlack } from '@shared/components/ui/Buttons';
import ModalProfile from './components/ModalProfile';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiImageEditLine } from 'react-icons/ri';
import ModalPassword from './components/ModalPassword';
import ModalPhoto from './components/ModalPhoto';

export default function Page() {
  const [showModalEditProfile, setShowModalEditProfile] = useState(false);
  const [showModalChangePassword, setShowModalChangePassword] = useState(false);
  const [showModalPhoto, setShowModalPhoto] = useState(false);

  const toogleModalEditProfile = () => setShowModalEditProfile(!showModalEditProfile);
  const toogleModalChangePassword = () => setShowModalChangePassword(!showModalChangePassword);
  const toogleModalPhoto = () => setShowModalPhoto(!showModalPhoto);

  return (
    <>
      <div className="w-full">
        <div className="mb-8 max-w-[600px]">
          <h2 className="font-bold text-3xl mb-4">Configuración de la cuenta</h2>
          <p className="text-gray-500 text-sm">Edite la información que utilizó para configurar su cuenta.</p>
        </div>

        <Dropdown active={true} title="Información de la cuenta">
          <button className="relative w-[80px] h-[80px] mb-6 transition-all hover:opacity-70" type="button" onClick={toogleModalPhoto}>
            <img className="w-full h-full rounded-full object-cover" src="/img/user.avif" alt="Foto de perfil" />
            <div className="absolute -bottom-2 -right-2 bg-white shadow-sm border border-gray-200 text-black rounded-full p-2">
              <RiImageEditLine />
            </div>
          </button>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Nombre</h3>
            <p className="text-sm">Martín Alexander</p>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Apellidos</h3>
            <p className="text-sm">Flores torres</p>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Correo Electrónico</h3>
            <a href="mailto:martinflorestorres@gmail.com">martinflorestorres@gmail.com</a>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Teléfono</h3>
            <p className="text-sm">929254912</p>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Fecha De Nacimiento</h3>
            <p className="text-sm">28 de julio de 2003</p>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">Genero</h3>
            <p className="text-sm">Masculino</p>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-[16px] mb-[4px]">País</h3>
            <p className="text-sm">Perú</p>
          </div>

          <ButtonBlack onClick={toogleModalEditProfile} className="flex items-center gap-2">
            <LiaUserEditSolid size={24} />
            Editar Perfil
          </ButtonBlack>
        </Dropdown>

        <Dropdown active={false} title="Cambiar contraseña">
          <div className="flex items-center justify-between gap-4">
            <p className="text-3xl">••••••••</p>

            <ButtonBlack onClick={toogleModalChangePassword}>Editar</ButtonBlack>
          </div>
        </Dropdown>
      </div>

      {showModalEditProfile && <ModalProfile onClose={toogleModalEditProfile} />}
      {showModalChangePassword && <ModalPassword onClose={toogleModalChangePassword} />}
      {showModalPhoto && <ModalPhoto onClose={toogleModalPhoto} />}
    </>
  );
}
