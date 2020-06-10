export const getImgUrl = (imgPath, width = 185)=> {
    return `//image.tmdb.org/t/p/w${width}${imgPath}`
};

export const getBackdropImgUrl = (imgPath) => {
  return `//image.tmdb.org/t/p/original${imgPath}`
};
