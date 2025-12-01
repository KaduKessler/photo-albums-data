import { writeFileSync } from 'fs';

const photos = [];
let id = 1;

// Configurações
const MAX_ALBUMS = 10;
const PHOTOS_PER_ALBUM = 3;

for (let albumId = 1; albumId <= MAX_ALBUMS; albumId++) {
  for (let photoNum = 1; photoNum <= PHOTOS_PER_ALBUM; photoNum++) {
    photos.push({
      id,
      albumId,
      title: `Foto ${photoNum} do Álbum ${albumId}`,
      thumbnailUrl: `https://placehold.co/150x150?text=A${albumId}-F${photoNum}`,
      url: `https://placehold.co/800x800?text=A${albumId}-F${photoNum}`,
    });
    id++;
  }
}

const db = { photos };

const fileName = 'db.json';

writeFileSync(fileName, JSON.stringify(db, null, 2), 'utf-8');
console.log(`Gerado ${fileName} com ${photos.length} fotos.`);