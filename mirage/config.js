export default function() {
  this.get('/collection/playlists', () => {
    return [
      {
        id: 1,
        name: 'BED MAN'
      },
      {
        id: 2,
        name: 'FLUTES ONLY'
      },
      {
        id: 3,
        name: 'COVERS'
      }
    ];
  });
}
