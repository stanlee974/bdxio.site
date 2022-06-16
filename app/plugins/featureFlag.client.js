const featuresFlag = {
  NAVIGATION: true,
  PROGRAMME: false,
  CFP: true,
};

export default function (context, inject) {
  Object.entries(featuresFlag).forEach(([key, value]) => {
    const formattedKey =
      key.toLowerCase().charAt(0).toUpperCase() + key.toLowerCase().slice(1);

    inject(`show${formattedKey}`, value);
  });
}
