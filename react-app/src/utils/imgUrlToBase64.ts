const imgUrlToBase64 = async (url: string): Promise<string | ArrayBuffer | null> => {
  const data = await fetch(url);
  const blob = await data.blob();

  return new Promise<string | null>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      }
    };
    reader.onerror = reject;
  }).catch(() => null);
};

export default imgUrlToBase64;