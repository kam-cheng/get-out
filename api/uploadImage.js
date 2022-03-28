import storage from "@react-native-firebase/storage";

const uploadImage = async (path) => {
  const filename = path.substring(path.lastIndexOf("/") + 1);
  const reference = storage().ref(filename);
  const task = reference.putFile(path);

  try {
    await task;
    const url = await reference.getDownloadURL();
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default uploadImage;
