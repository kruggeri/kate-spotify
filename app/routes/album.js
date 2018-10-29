import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('album', params.id);

    // seed data
    // return [
    //   {
    //     album_type: 'compilation',
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify: 'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //         id: '040Bv6cZTRh30LyyYVXgJX',
    //         name: 'Gene Clark',
    //         type: 'artist',
    //         uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //       }
    //     ],
    //     copyrights: [
    //       {
    //         text: '(P) 1991 Sony Music Entertainment Inc.',
    //         type: 'P'
    //       }
    //     ],
    //     external_ids: {
    //       upc: '074644852325'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/album/3ZURMtfIDGKosM40ivlVeA'
    //     },
    //     genres: [],
    //     href: 'https://api.spotify.com/v1/albums/3ZURMtfIDGKosM40ivlVeA',
    //     id: '3ZURMtfIDGKosM40ivlVeA',
    //     images: [
    //       {
    //         height: 640,
    //         url:
    //           'https://i.scdn.co/image/976c551cb18638c674c5a598f47f3ce0fa9d6a16',
    //         width: 640
    //       },
    //       {
    //         height: 300,
    //         url:
    //           'https://i.scdn.co/image/6d7faa3dafb84b92e8286e17a2e55c9639e56713',
    //         width: 300
    //       },
    //       {
    //         height: 64,
    //         url:
    //           'https://i.scdn.co/image/7045659924736cac8b80cd9c53b5c10dc2e2c6f3',
    //         width: 64
    //       }
    //     ],
    //     label: 'Legacy/Columbia',
    //     name: 'Echoes',
    //     popularity: 23,
    //     release_date: '1991-09-10',
    //     release_date_precision: 'day',
    //     total_tracks: 20,
    //     tracks: {
    //       href:
    //         'https://api.spotify.com/v1/albums/3ZURMtfIDGKosM40ivlVeA/tracks?offset=0&limit=50&market=ES',
    //       items: [
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 121933,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/5qEBFcGo6tIqnfJPKPjZWZ'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/5qEBFcGo6tIqnfJPKPjZWZ',
    //           id: '5qEBFcGo6tIqnfJPKPjZWZ',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Boston',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/350487c18e6ddf32341dd3591c9cf2c8cc607a4d?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 1,
    //           type: 'track',
    //           uri: 'spotify:track:5qEBFcGo6tIqnfJPKPjZWZ'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 149626,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/1vXy7L2BgtwtGHX2KDA61A'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/1vXy7L2BgtwtGHX2KDA61A',
    //           id: '1vXy7L2BgtwtGHX2KDA61A',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'For Me Again',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/4ab34f357134404fd062150638b8c3c3075db1eb?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 2,
    //           type: 'track',
    //           uri: 'spotify:track:1vXy7L2BgtwtGHX2KDA61A'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 137600,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/7L9ur2jqdxx30oul192BGb'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/7L9ur2jqdxx30oul192BGb',
    //           id: '7L9ur2jqdxx30oul192BGb',
    //           is_local: false,
    //           is_playable: true,
    //           name: "I Knew I'd Want You - Remixed Version",
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/a299ea2288ec67d7e309b112b20b4f85322ff932?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 3,
    //           type: 'track',
    //           uri: 'spotify:track:7L9ur2jqdxx30oul192BGb'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 156000,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/3yNQIixlZCjLsUcuXAagSh'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/3yNQIixlZCjLsUcuXAagSh',
    //           id: '3yNQIixlZCjLsUcuXAagSh',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Here Without You',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/0e85fc285bfb00fea60e651ea1a4abefd9d48681?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 4,
    //           type: 'track',
    //           uri: 'spotify:track:3yNQIixlZCjLsUcuXAagSh'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 168373,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/1d6tP60WXRTslVrmvMgRDJ'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/1d6tP60WXRTslVrmvMgRDJ',
    //           id: '1d6tP60WXRTslVrmvMgRDJ',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Set You Free This Time',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/32d9eca39261cc41e613c72126ee5ccde4869cce?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 5,
    //           type: 'track',
    //           uri: 'spotify:track:1d6tP60WXRTslVrmvMgRDJ'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 165533,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/4gW0BZhOZW4iui0lKE7R79'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/4gW0BZhOZW4iui0lKE7R79',
    //           id: '4gW0BZhOZW4iui0lKE7R79',
    //           is_local: false,
    //           is_playable: true,
    //           name: "If You're Gone - Remixed Version",
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/444f6e27198854d5ffed07d3401c8f16b5bde5cf?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 6,
    //           type: 'track',
    //           uri: 'spotify:track:4gW0BZhOZW4iui0lKE7R79'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 157533,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/2z4jdFkIxHNpHW08Bh0Pm5'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/2z4jdFkIxHNpHW08Bh0Pm5',
    //           id: '2z4jdFkIxHNpHW08Bh0Pm5',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Is Yours Is Mine - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/7e0c4d031e6a944bfe5a465c6d0dae46ce2d9baa?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 7,
    //           type: 'track',
    //           uri: 'spotify:track:2z4jdFkIxHNpHW08Bh0Pm5'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 125826,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/14SlS5o2bGNIOs0T3rJFhy'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/14SlS5o2bGNIOs0T3rJFhy',
    //           id: '14SlS5o2bGNIOs0T3rJFhy',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'So You Say You Lost Your Baby - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/1d7f5ed9ce442aff71631358109eccc73748a94f?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 8,
    //           type: 'track',
    //           uri: 'spotify:track:14SlS5o2bGNIOs0T3rJFhy'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 139600,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/0fUq2WaZhsvVuUqtV8gzOm'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/0fUq2WaZhsvVuUqtV8gzOm',
    //           id: '0fUq2WaZhsvVuUqtV8gzOm',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Tried So Hard - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/0dc2de33c704720d93619422e8212d57e89eb8dd?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 9,
    //           type: 'track',
    //           uri: 'spotify:track:0fUq2WaZhsvVuUqtV8gzOm'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 122573,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/0XciMNMJSvRg7woZcHavlL'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/0XciMNMJSvRg7woZcHavlL',
    //           id: '0XciMNMJSvRg7woZcHavlL',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Needing Someone',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/b4cf05c2c1f6f047d1d45e007e9b85a3af0cdca9?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 10,
    //           type: 'track',
    //           uri: 'spotify:track:0XciMNMJSvRg7woZcHavlL'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 196093,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/1jFFmWMIGRGKXPODtSKZ9Z'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/1jFFmWMIGRGKXPODtSKZ9Z',
    //           id: '1jFFmWMIGRGKXPODtSKZ9Z',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Echoes - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/dfc6c5216510bb73227272bf3fa0f3becd1d7bc1?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 11,
    //           type: 'track',
    //           uri: 'spotify:track:1jFFmWMIGRGKXPODtSKZ9Z'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 209533,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/4g0ps2wtv3vWkZIqZw7by5'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/4g0ps2wtv3vWkZIqZw7by5',
    //           id: '4g0ps2wtv3vWkZIqZw7by5',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'The Same One - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/b8c17674219a863a91c62411951b46df9fb30adc?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 12,
    //           type: 'track',
    //           uri: 'spotify:track:4g0ps2wtv3vWkZIqZw7by5'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 129773,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/68EGHvM8cctSKQat3vzQmI'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/68EGHvM8cctSKQat3vzQmI',
    //           id: '68EGHvM8cctSKQat3vzQmI',
    //           is_local: false,
    //           is_playable: true,
    //           name: "Couldn't Believe Her - Remixed Version",
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/bfecb3fe126d68fc503c3e13372a1b78110f3764?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 13,
    //           type: 'track',
    //           uri: 'spotify:track:68EGHvM8cctSKQat3vzQmI'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 104866,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/1MihEtIm3ecNPrfFtgXI9J'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/1MihEtIm3ecNPrfFtgXI9J',
    //           id: '1MihEtIm3ecNPrfFtgXI9J',
    //           is_local: false,
    //           is_playable: true,
    //           name: "Keep On Pushin' - Remixed Version",
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/15b0c50d150089545c9be87aaf929509997b2b82?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 14,
    //           type: 'track',
    //           uri: 'spotify:track:1MihEtIm3ecNPrfFtgXI9J'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 178200,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/0V29WBENXGcL0cUc5yWWlG'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/0V29WBENXGcL0cUc5yWWlG',
    //           id: '0V29WBENXGcL0cUc5yWWlG',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'I Found You',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/aa4b727d34a56ec0312a73c53c244a3dd9a44e2a?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 15,
    //           type: 'track',
    //           uri: 'spotify:track:0V29WBENXGcL0cUc5yWWlG'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 174560,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/2a87Tm11znXeMolUvvgHCD'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/2a87Tm11znXeMolUvvgHCD',
    //           id: '2a87Tm11znXeMolUvvgHCD',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Elevator Operator - Remixed Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/6e8950d8a1a1ed87d722fcf0343fd2fe17e2e958?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 16,
    //           type: 'track',
    //           uri: 'spotify:track:2a87Tm11znXeMolUvvgHCD'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 93706,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/3yOu2vKJOhKMS7MTMAYq6u'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/3yOu2vKJOhKMS7MTMAYq6u',
    //           id: '3yOu2vKJOhKMS7MTMAYq6u',
    //           is_local: false,
    //           is_playable: true,
    //           name: "Think I'm Gonna Feel Better - Remixed Version",
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/71ff0969a0ff20bd20f672ec0afbffed95053f9e?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 17,
    //           type: 'track',
    //           uri: 'spotify:track:3yOu2vKJOhKMS7MTMAYq6u'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             },
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/7fLND1hn7iqjsZNc1iKImA'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/7fLND1hn7iqjsZNc1iKImA',
    //               id: '7fLND1hn7iqjsZNc1iKImA',
    //               name: 'The Gosdin Brothers',
    //               type: 'artist',
    //               uri: 'spotify:artist:7fLND1hn7iqjsZNc1iKImA'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 155426,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/1lpNnAIboYeY2TThWkt5Ag'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/1lpNnAIboYeY2TThWkt5Ag',
    //           id: '1lpNnAIboYeY2TThWkt5Ag',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'The French Girl - Stereo Version - Remixed',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/2daee7f8aeb750dd29d1b98712e46b76931302a3?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 18,
    //           type: 'track',
    //           uri: 'spotify:track:1lpNnAIboYeY2TThWkt5Ag'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             },
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/7fLND1hn7iqjsZNc1iKImA'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/7fLND1hn7iqjsZNc1iKImA',
    //               id: '7fLND1hn7iqjsZNc1iKImA',
    //               name: 'The Gosdin Brothers',
    //               type: 'artist',
    //               uri: 'spotify:artist:7fLND1hn7iqjsZNc1iKImA'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 187266,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/2e1RehGf2fkMVKE951EYGc'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/2e1RehGf2fkMVKE951EYGc',
    //           id: '2e1RehGf2fkMVKE951EYGc',
    //           is_local: false,
    //           is_playable: true,
    //           name: 'Only Colombe - Stereo Version - Remixed',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/1ac76a6b76cb10ada808f1e3725811bbb390837d?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 19,
    //           type: 'track',
    //           uri: 'spotify:track:2e1RehGf2fkMVKE951EYGc'
    //         },
    //         {
    //           artists: [
    //             {
    //               external_urls: {
    //                 spotify:
    //                   'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //               },
    //               href:
    //                 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //               id: '040Bv6cZTRh30LyyYVXgJX',
    //               name: 'Gene Clark',
    //               type: 'artist',
    //               uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //             }
    //           ],
    //           disc_number: 1,
    //           duration_ms: 190800,
    //           explicit: false,
    //           external_urls: {
    //             spotify: 'https://open.spotify.com/track/6BLXkfbxrcii46lpEGHyHX'
    //           },
    //           href: 'https://api.spotify.com/v1/tracks/6BLXkfbxrcii46lpEGHyHX',
    //           id: '6BLXkfbxrcii46lpEGHyHX',
    //           is_local: false,
    //           is_playable: true,
    //           name:
    //             'So You Say You Lost Your Baby - Previously Unreleased Acoustic Demo Version',
    //           preview_url:
    //             'https://p.scdn.co/mp3-preview/6d6e534108aa5f1dd124385738c24fdd6801bd71?cid=774b29d4f13844c495f206cafdad9c86',
    //           track_number: 20,
    //           type: 'track',
    //           uri: 'spotify:track:6BLXkfbxrcii46lpEGHyHX'
    //         }
    //       ],
    //       limit: 50,
    //       next: null,
    //       offset: 0,
    //       previous: null,
    //       total: 20
    //     },
    //     type: 'album',
    //     uri: 'spotify:album:3ZURMtfIDGKosM40ivlVeA'
    //   }
    // ];
  }
});
