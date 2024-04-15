import { toast } from "react-toastify";

export const saveTolocalstorage = (data ,key) => {
  const savedData = JSON.parse(localStorage.getItem(key)) || [];

  const existedData = savedData.find((item) => item.id === data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem(key, JSON.stringify(savedData));
    toast.success(`Added to ${key}`)
    // alert("Added to storage");
  } else {
    toast.info(`Already in ${key}`)
    // alert("Already in storage");
  }
};

export const getFromLocalstorage = (key) => {
  const savedData = JSON.parse(localStorage.getItem(key)) || [];
  return savedData
};
 