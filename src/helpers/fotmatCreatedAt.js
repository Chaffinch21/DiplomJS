export const formatCreatedAt = (createdAt) => {
  const time = new Date(createdAt);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return `${time.toLocaleString('en-US', options)}`;
}