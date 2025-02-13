import { FC } from "react";
import cls from "./CreateAccountInfo.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, InputTheme } from "shared/ui/Input/ui/Input";
import { useFileInput } from "shared/hooks/useFileInput";

interface CreateAccountInfoProps {
  className?: string;
}

export const CreateAccountInfo: FC<CreateAccountInfoProps> = (props) => {
  const { className } = props;
  const {
    file,
    fileUrl,
    onChange: handleFileChange,
    reset: resetFile,
  } = useFileInput();

  console.log(fileUrl);

  return (
    <section className={classNames(cls.createAccountInfo, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <form className={classNames(cls.form)}>
            <div className={classNames(cls.setImgBox)}>
              <div className={classNames(cls.setImage)}>
                <FontAwesomeIcon className={cls.plusIcon} icon={faPlus} />
                <input type="file" onChange={handleFileChange} />
                {file && (
                  <div className={classNames(cls.img)}>
                    <img className="img" src={fileUrl} />
                  </div>
                )}
              </div>
              <div className={cls.titleBox}>
                <h4 className="title">Set your image</h4>
                <p className="subtitle">& add your info</p>
              </div>
            </div>
            <div className={cls.inputBox}>
              <Input
                theme={InputTheme.FULL}
                absolutePlaceholder="Date of birth"
              />
              <Input
                theme={InputTheme.FULL}
                absolutePlaceholder="Family status"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
