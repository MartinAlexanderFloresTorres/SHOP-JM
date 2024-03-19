import { ButtonBlack } from '@/app/shared/components/ui/Buttons';
import Modal from '@/app/shared/components/ui/Modal';
import { IoClose, IoCloudUploadOutline } from 'react-icons/io5';

interface ModalPhotoProps {
  onClose: () => void;
}

export default function ModalPhoto({ onClose }: ModalPhotoProps) {
  return (
    <Modal onClose={onClose} title="Cambiar Foto" description="Cambie la foto que utiliza para su perfil." allowCloseOnTouch={true} showHeader={true} IconClose={IoClose} center={true}>
      <form className="w-full">
        <div className="flex flex-col items-center justify-center mb-8">
          <img className="w-[190px] h-[190px] rounded-full object-cover" src="/img/user.avif" alt="Foto de perfil" />

          <label htmlFor="photo" className="cursor-pointer my-6 border-2 border-gray-100 shadow-sm rounded-full px-4 py-2 font-bold">
            <input type="file" name="photo" id="photo" hidden />

            <div className="flex items-center gap-2 text-center">
              Subir Foto
              <IoCloudUploadOutline size={24} />
            </div>
          </label>

          <p className="text-sky-500 text-sm font-bold">JPG, PNG, WEBP o AVIF. Peso máximo de 1Mb</p>
        </div>

        <ButtonBlack type="submit" className="w-full">
          Cambiar Foto
        </ButtonBlack>
      </form>
    </Modal>
  );
}
