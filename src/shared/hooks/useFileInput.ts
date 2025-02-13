import { useState, ChangeEvent } from "react";

export const useFileInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile)); // Создаём временный URL
    }
  };

  const resetFile = () => {
    setFile(null);
    setFileUrl(null);
  };

  return {
    file,
    fileUrl,
    onChange: handleFileChange,
    reset: resetFile,
  };
};