export const formatItemPhotosList = (item) => {
  const {
    id,
    urls: {
      full: fullImageUrl,
      thumb: previewImageUrl
    },
    created_at: createdAt,
    color: colorImage,
    likes: countLikes,
    liked_by_user: likedByUser,
    alt_description: altDescription,
    user: {
      id: authorId,
      name: authorName,
      profile_image: {
        medium: authorAvatar
      },
      links: {
        html: authorProfileLink
      },
      username: authorUsername
    }
  } = item;

  return {
    id,
    fullImageUrl,
    previewImageUrl,
    createdAt,
    colorImage,
    countLikes,
    likedByUser,
    altDescription,
    author: {
      authorId,
      authorName,
      authorAvatar,
      authorProfileLink,
      authorUsername
    }
  }
}