import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'kate-spotify/config/environment';

export default Route.extend({
  model() {
    const headers = {
      headers: {
        Authorization: `Bearer ${ENV.AUTH_KEY}`
      }
    };
    return fetch(
      'https://api.spotify.com/v1/browse/new-releases',
      headers
    ).then(function(response) {
      const data = response.json();
      console.log(data);
      return data;
    });
    // return [
    // {
    //   track: {
    //     album: {
    //       album_type: 'compilation',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //           id: '040Bv6cZTRh30LyyYVXgJX',
    //           name: 'Gene Clark',
    //           type: 'artist',
    //           uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/3ZURMtfIDGKosM40ivlVeA'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/3ZURMtfIDGKosM40ivlVeA',
    //       id: '3ZURMtfIDGKosM40ivlVeA',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/976c551cb18638c674c5a598f47f3ce0fa9d6a16',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/6d7faa3dafb84b92e8286e17a2e55c9639e56713',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/7045659924736cac8b80cd9c53b5c10dc2e2c6f3',
    //           width: 64
    //         }
    //       ],
    //       name: 'Echoes',
    //       type: 'album',
    //       uri: 'spotify:album:3ZURMtfIDGKosM40ivlVeA'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //         id: '040Bv6cZTRh30LyyYVXgJX',
    //         name: 'Gene Clark',
    //         type: 'artist',
    //         uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 121933,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USSM19910315'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/5qEBFcGo6tIqnfJPKPjZWZ'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/5qEBFcGo6tIqnfJPKPjZWZ',
    //     id: '5qEBFcGo6tIqnfJPKPjZWZ',
    //     name: 'Boston',
    //     popularity: 17,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/350487c18e6ddf32341dd3591c9cf2c8cc607a4d?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 1,
    //     type: 'track',
    //     uri: 'spotify:track:5qEBFcGo6tIqnfJPKPjZWZ'
    //   },
    //   played_at: '2018-09-17T19:47:12.550Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/2C49JSiNeHN0xwLQCohpyY'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/2C49JSiNeHN0xwLQCohpyY',
    //           id: '2C49JSiNeHN0xwLQCohpyY',
    //           name: 'The Millennium',
    //           type: 'artist',
    //           uri: 'spotify:artist:2C49JSiNeHN0xwLQCohpyY'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/6sSb8m6MPGJIEMKH8FWCS0'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/6sSb8m6MPGJIEMKH8FWCS0',
    //       id: '6sSb8m6MPGJIEMKH8FWCS0',
    //       images: [
    //         {
    //           height: 625,
    //           url:
    //             'https://i.scdn.co/image/f564deda1953dfdcd321f71db9a1a203f2d1a30b',
    //           width: 640
    //         },
    //         {
    //           height: 293,
    //           url:
    //             'https://i.scdn.co/image/7b696c525e8d5a4f549c0ebf3f80ac1cf26a0719',
    //           width: 300
    //         },
    //         {
    //           height: 62,
    //           url:
    //             'https://i.scdn.co/image/bf5805db22404f28943dee0ea4fe6863503b68e6',
    //           width: 64
    //         }
    //       ],
    //       name: 'Begin',
    //       type: 'album',
    //       uri: 'spotify:album:6sSb8m6MPGJIEMKH8FWCS0'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/2C49JSiNeHN0xwLQCohpyY'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/2C49JSiNeHN0xwLQCohpyY',
    //         id: '2C49JSiNeHN0xwLQCohpyY',
    //         name: 'The Millennium',
    //         type: 'artist',
    //         uri: 'spotify:artist:2C49JSiNeHN0xwLQCohpyY'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 78320,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USSM16801608'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/7AziCrfYF6XA2H9Bv76S8F'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/7AziCrfYF6XA2H9Bv76S8F',
    //     id: '7AziCrfYF6XA2H9Bv76S8F',
    //     name: 'Prelude',
    //     popularity: 20,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/7c89030e5187c51ce6c08fdb1c344db5f093e695?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 1,
    //     type: 'track',
    //     uri: 'spotify:track:7AziCrfYF6XA2H9Bv76S8F'
    //   },
    //   played_at: '2018-09-17T19:45:09.019Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/5uQyXHg4ph7gNlnZHxt9kX'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/5uQyXHg4ph7gNlnZHxt9kX',
    //           id: '5uQyXHg4ph7gNlnZHxt9kX',
    //           name: 'Robert Lester Folsom',
    //           type: 'artist',
    //           uri: 'spotify:artist:5uQyXHg4ph7gNlnZHxt9kX'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/780zhYt7wiroYXHLYPhPiJ'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/780zhYt7wiroYXHLYPhPiJ',
    //       id: '780zhYt7wiroYXHLYPhPiJ',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/5c62501f37033cb4f2d93746450e04a27e091d4b',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/79d6dd098ad7a496c71a4c63a43e67fe48ae4627',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/8a6d643edc81d3dd7e2b8534b55200113303137c',
    //           width: 64
    //         }
    //       ],
    //       name: 'Music And Dreams',
    //       type: 'album',
    //       uri: 'spotify:album:780zhYt7wiroYXHLYPhPiJ'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/5uQyXHg4ph7gNlnZHxt9kX'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/5uQyXHg4ph7gNlnZHxt9kX',
    //         id: '5uQyXHg4ph7gNlnZHxt9kX',
    //         name: 'Robert Lester Folsom',
    //         type: 'artist',
    //         uri: 'spotify:artist:5uQyXHg4ph7gNlnZHxt9kX'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 208946,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'QMV8L1400701'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/3lL7NMMHZDZsdjNHxQhqqB'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/3lL7NMMHZDZsdjNHxQhqqB',
    //     id: '3lL7NMMHZDZsdjNHxQhqqB',
    //     name: 'Music And Dreams',
    //     popularity: 26,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/97b7868ef4e39cc51346c6ba700f2e98a66695fc?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 1,
    //     type: 'track',
    //     uri: 'spotify:track:3lL7NMMHZDZsdjNHxQhqqB'
    //   },
    //   played_at: '2018-09-17T19:43:50.199Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/1yap1SgRPMxgyfrrDlQ95y'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/1yap1SgRPMxgyfrrDlQ95y',
    //           id: '1yap1SgRPMxgyfrrDlQ95y',
    //           name: 'Emitt Rhodes',
    //           type: 'artist',
    //           uri: 'spotify:artist:1yap1SgRPMxgyfrrDlQ95y'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/25L6dfCmxv7ZcFolxwnmmp'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/25L6dfCmxv7ZcFolxwnmmp',
    //       id: '25L6dfCmxv7ZcFolxwnmmp',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/5bb5fdf3e2da71828363a0dec0aab6caa7898486',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/0f1f36bceea4b985af518b8fc894605b3a78305b',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/43c5158ad8635d0d294dd27fe5ec6c729fadefb3',
    //           width: 64
    //         }
    //       ],
    //       name: 'Rainbow Ends',
    //       type: 'album',
    //       uri: 'spotify:album:25L6dfCmxv7ZcFolxwnmmp'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/1yap1SgRPMxgyfrrDlQ95y'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/1yap1SgRPMxgyfrrDlQ95y',
    //         id: '1yap1SgRPMxgyfrrDlQ95y',
    //         name: 'Emitt Rhodes',
    //         type: 'artist',
    //         uri: 'spotify:artist:1yap1SgRPMxgyfrrDlQ95y'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 199080,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'QMWHB1501599'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/5aIVRSOeadwiwvkssC2aut'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/5aIVRSOeadwiwvkssC2aut',
    //     id: '5aIVRSOeadwiwvkssC2aut',
    //     name: 'Rainbow Ends',
    //     popularity: 10,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/ec127bbdb07a3d969da22aa775a5def9ae4bf7b4?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 11,
    //     type: 'track',
    //     uri: 'spotify:track:5aIVRSOeadwiwvkssC2aut'
    //   },
    //   played_at: '2018-09-17T19:40:20.780Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/3RTzAwFprBqiskp550eSJX'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/3RTzAwFprBqiskp550eSJX',
    //           id: '3RTzAwFprBqiskp550eSJX',
    //           name: 'Harry Nilsson',
    //           type: 'artist',
    //           uri: 'spotify:artist:3RTzAwFprBqiskp550eSJX'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/1wAoX1bG8x4HBDslAOdli5'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/1wAoX1bG8x4HBDslAOdli5',
    //       id: '1wAoX1bG8x4HBDslAOdli5',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/fcb9d70ec9f6d0e2a00d66cfc62f2328a6f00b28',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/0ec455cb5a4c623e644df22fe421de35dc2bd6ff',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/ba8327ac2e8602486f72df9877090b130c35a976',
    //           width: 64
    //         }
    //       ],
    //       name: 'Harry',
    //       type: 'album',
    //       uri: 'spotify:album:1wAoX1bG8x4HBDslAOdli5'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/3RTzAwFprBqiskp550eSJX'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/3RTzAwFprBqiskp550eSJX',
    //         id: '3RTzAwFprBqiskp550eSJX',
    //         name: 'Harry Nilsson',
    //         type: 'artist',
    //         uri: 'spotify:artist:3RTzAwFprBqiskp550eSJX'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 164506,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USRC16901014'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/4o3cKlTvLB18r7D6iI7Akj'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/4o3cKlTvLB18r7D6iI7Akj',
    //     id: '4o3cKlTvLB18r7D6iI7Akj',
    //     name: 'I Guess the Lord Must Be in New York City',
    //     popularity: 35,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/7e66809245ac9bfccfd6778346c2836a7108d088?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 10,
    //     type: 'track',
    //     uri: 'spotify:track:4o3cKlTvLB18r7D6iI7Akj'
    //   },
    //   played_at: '2018-09-17T19:37:01.235Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/4u9ZHrFXFXptM7H68RJbiY'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/4u9ZHrFXFXptM7H68RJbiY',
    //           id: '4u9ZHrFXFXptM7H68RJbiY',
    //           name: 'Kathy Heideman',
    //           type: 'artist',
    //           uri: 'spotify:artist:4u9ZHrFXFXptM7H68RJbiY'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/1sB5hCBFQF0zS9qHB5Ei6I'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/1sB5hCBFQF0zS9qHB5Ei6I',
    //       id: '1sB5hCBFQF0zS9qHB5Ei6I',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/253e89e54e0be3efc831228d16005c8ab3195947',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/e55190261cf628ebb54b285d90caa264cedce41b',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/853b2bc101b6091d5bd11e0e8de162a436bfcacb',
    //           width: 64
    //         }
    //       ],
    //       name: 'Move With Love',
    //       type: 'album',
    //       uri: 'spotify:album:1sB5hCBFQF0zS9qHB5Ei6I'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/4u9ZHrFXFXptM7H68RJbiY'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/4u9ZHrFXFXptM7H68RJbiY',
    //         id: '4u9ZHrFXFXptM7H68RJbiY',
    //         name: 'Kathy Heideman',
    //         type: 'artist',
    //         uri: 'spotify:artist:4u9ZHrFXFXptM7H68RJbiY'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 186772,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USCW61300118'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/3xWoxqhOFtUV2NNrePf0EY'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/3xWoxqhOFtUV2NNrePf0EY',
    //     id: '3xWoxqhOFtUV2NNrePf0EY',
    //     name: "The Earth Won't Hold Me",
    //     popularity: 31,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/c0ca2b04f352187b7372032d988dce0088ede417?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 9,
    //     type: 'track',
    //     uri: 'spotify:track:3xWoxqhOFtUV2NNrePf0EY'
    //   },
    //   played_at: '2018-09-17T19:34:16.212Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/0yxIUq0WFyaTmYyleG4Uca'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/0yxIUq0WFyaTmYyleG4Uca',
    //           id: '0yxIUq0WFyaTmYyleG4Uca',
    //           name: 'Kim Jung Mi',
    //           type: 'artist',
    //           uri: 'spotify:artist:0yxIUq0WFyaTmYyleG4Uca'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/2lzfXDmAAnFTwAHNc759Rz'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/2lzfXDmAAnFTwAHNc759Rz',
    //       id: '2lzfXDmAAnFTwAHNc759Rz',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/29643f6d5e617281a68a60d55b3db7c339dac673',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/5f4bb3a40544a8705ee02eeba908d3199e74b863',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/a346b5fc4a9388f5c4a939eec1f252ad0036d56a',
    //           width: 64
    //         }
    //       ],
    //       name: 'Now',
    //       type: 'album',
    //       uri: 'spotify:album:2lzfXDmAAnFTwAHNc759Rz'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/0yxIUq0WFyaTmYyleG4Uca'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/0yxIUq0WFyaTmYyleG4Uca',
    //         id: '0yxIUq0WFyaTmYyleG4Uca',
    //         name: 'Kim Jung Mi',
    //         type: 'artist',
    //         uri: 'spotify:artist:0yxIUq0WFyaTmYyleG4Uca'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 200106,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'QMS2G1200002'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/5HshJOG3lOUEZinx0I3vXf'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/5HshJOG3lOUEZinx0I3vXf',
    //     id: '5HshJOG3lOUEZinx0I3vXf',
    //     name: 'Wind',
    //     popularity: 25,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/b442cbba67809e7b3de8d604959f7f5a940d41a3?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 2,
    //     type: 'track',
    //     uri: 'spotify:track:5HshJOG3lOUEZinx0I3vXf'
    //   },
    //   played_at: '2018-09-17T19:28:36.445Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/2C49JSiNeHN0xwLQCohpyY'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/2C49JSiNeHN0xwLQCohpyY',
    //           id: '2C49JSiNeHN0xwLQCohpyY',
    //           name: 'The Millennium',
    //           type: 'artist',
    //           uri: 'spotify:artist:2C49JSiNeHN0xwLQCohpyY'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/6sSb8m6MPGJIEMKH8FWCS0'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/6sSb8m6MPGJIEMKH8FWCS0',
    //       id: '6sSb8m6MPGJIEMKH8FWCS0',
    //       images: [
    //         {
    //           height: 625,
    //           url:
    //             'https://i.scdn.co/image/f564deda1953dfdcd321f71db9a1a203f2d1a30b',
    //           width: 640
    //         },
    //         {
    //           height: 293,
    //           url:
    //             'https://i.scdn.co/image/7b696c525e8d5a4f549c0ebf3f80ac1cf26a0719',
    //           width: 300
    //         },
    //         {
    //           height: 62,
    //           url:
    //             'https://i.scdn.co/image/bf5805db22404f28943dee0ea4fe6863503b68e6',
    //           width: 64
    //         }
    //       ],
    //       name: 'Begin',
    //       type: 'album',
    //       uri: 'spotify:album:6sSb8m6MPGJIEMKH8FWCS0'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/2C49JSiNeHN0xwLQCohpyY'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/2C49JSiNeHN0xwLQCohpyY',
    //         id: '2C49JSiNeHN0xwLQCohpyY',
    //         name: 'The Millennium',
    //         type: 'artist',
    //         uri: 'spotify:artist:2C49JSiNeHN0xwLQCohpyY'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 157106,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USSM16801610'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/4rKpi6H6IFtuBVAdNN3fUe'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/4rKpi6H6IFtuBVAdNN3fUe',
    //     id: '4rKpi6H6IFtuBVAdNN3fUe',
    //     name: 'I Just Want to Be Your Friend',
    //     popularity: 21,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/21541cddb7264591b7969c78ab504a5a37613f6e?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 3,
    //     type: 'track',
    //     uri: 'spotify:track:4rKpi6H6IFtuBVAdNN3fUe'
    //   },
    //   played_at: '2018-09-17T19:25:15.828Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/4U4dyH3tMYOQMZYTjsXmeJ'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/4U4dyH3tMYOQMZYTjsXmeJ',
    //           id: '4U4dyH3tMYOQMZYTjsXmeJ',
    //           name: 'Jim Sullivan',
    //           type: 'artist',
    //           uri: 'spotify:artist:4U4dyH3tMYOQMZYTjsXmeJ'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/6zaVaNAjvlN583TtOJIpZu'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/6zaVaNAjvlN583TtOJIpZu',
    //       id: '6zaVaNAjvlN583TtOJIpZu',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/e7c4021d575ffcd4ee0edc95006c8d566d2d5b13',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/c58f468fb96fc0d8750b19d8ba4ef05610e95f72',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/56df8b4082b48e9bc7d7c9f896da971b8e02b961',
    //           width: 64
    //         }
    //       ],
    //       name: 'U.F.O.',
    //       type: 'album',
    //       uri: 'spotify:album:6zaVaNAjvlN583TtOJIpZu'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/4U4dyH3tMYOQMZYTjsXmeJ'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/4U4dyH3tMYOQMZYTjsXmeJ',
    //         id: '4U4dyH3tMYOQMZYTjsXmeJ',
    //         name: 'Jim Sullivan',
    //         type: 'artist',
    //         uri: 'spotify:artist:4U4dyH3tMYOQMZYTjsXmeJ'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 244933,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USDEA1005409'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/3r8A059HdiT9ribYvNRrcI'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/3r8A059HdiT9ribYvNRrcI',
    //     id: '3r8A059HdiT9ribYvNRrcI',
    //     name: 'Johnny',
    //     popularity: 28,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/81c28960ff53b088ca8a895a0b9ce11669b2d6b8?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 9,
    //     type: 'track',
    //     uri: 'spotify:track:3r8A059HdiT9ribYvNRrcI'
    //   },
    //   played_at: '2018-09-17T19:22:38.219Z',
    //   context: null
    // },
    // {
    //   track: {
    //     album: {
    //       album_type: 'album',
    //       artists: [
    //         {
    //           external_urls: {
    //             spotify:
    //               'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //           },
    //           href:
    //             'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //           id: '040Bv6cZTRh30LyyYVXgJX',
    //           name: 'Gene Clark',
    //           type: 'artist',
    //           uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //         }
    //       ],
    //       available_markets: [
    //         'AD',
    //         'AR',
    //         'AT',
    //         'AU',
    //         'BE',
    //         'BG',
    //         'BO',
    //         'BR',
    //         'CA',
    //         'CH',
    //         'CL',
    //         'CO',
    //         'CR',
    //         'CY',
    //         'CZ',
    //         'DE',
    //         'DK',
    //         'DO',
    //         'EC',
    //         'EE',
    //         'ES',
    //         'FI',
    //         'FR',
    //         'GB',
    //         'GR',
    //         'GT',
    //         'HK',
    //         'HN',
    //         'HU',
    //         'ID',
    //         'IE',
    //         'IS',
    //         'IT',
    //         'JP',
    //         'LI',
    //         'LT',
    //         'LU',
    //         'LV',
    //         'MC',
    //         'MT',
    //         'MX',
    //         'MY',
    //         'NI',
    //         'NL',
    //         'NO',
    //         'NZ',
    //         'PA',
    //         'PE',
    //         'PH',
    //         'PL',
    //         'PT',
    //         'PY',
    //         'SE',
    //         'SG',
    //         'SK',
    //         'SV',
    //         'TR',
    //         'TW',
    //         'US',
    //         'UY'
    //       ],
    //       external_urls: {
    //         spotify: 'https://open.spotify.com/album/5pCs9qZgw8VCzahyfAgiio'
    //       },
    //       href: 'https://api.spotify.com/v1/albums/5pCs9qZgw8VCzahyfAgiio',
    //       id: '5pCs9qZgw8VCzahyfAgiio',
    //       images: [
    //         {
    //           height: 640,
    //           url:
    //             'https://i.scdn.co/image/d7c81f629a3fcb23ad3d51c0c5f9f725e451ad57',
    //           width: 640
    //         },
    //         {
    //           height: 300,
    //           url:
    //             'https://i.scdn.co/image/9495815ad1cd05963adfbcf66a1a76b2b1ad5c61',
    //           width: 300
    //         },
    //         {
    //           height: 64,
    //           url:
    //             'https://i.scdn.co/image/9f657334997027d2665299320116cc303569a84f',
    //           width: 64
    //         }
    //       ],
    //       name: 'No Other',
    //       type: 'album',
    //       uri: 'spotify:album:5pCs9qZgw8VCzahyfAgiio'
    //     },
    //     artists: [
    //       {
    //         external_urls: {
    //           spotify:
    //             'https://open.spotify.com/artist/040Bv6cZTRh30LyyYVXgJX'
    //         },
    //         href: 'https://api.spotify.com/v1/artists/040Bv6cZTRh30LyyYVXgJX',
    //         id: '040Bv6cZTRh30LyyYVXgJX',
    //         name: 'Gene Clark',
    //         type: 'artist',
    //         uri: 'spotify:artist:040Bv6cZTRh30LyyYVXgJX'
    //       }
    //     ],
    //     available_markets: [
    //       'AD',
    //       'AR',
    //       'AT',
    //       'AU',
    //       'BE',
    //       'BG',
    //       'BO',
    //       'BR',
    //       'CA',
    //       'CH',
    //       'CL',
    //       'CO',
    //       'CR',
    //       'CY',
    //       'CZ',
    //       'DE',
    //       'DK',
    //       'DO',
    //       'EC',
    //       'EE',
    //       'ES',
    //       'FI',
    //       'FR',
    //       'GB',
    //       'GR',
    //       'GT',
    //       'HK',
    //       'HN',
    //       'HU',
    //       'ID',
    //       'IE',
    //       'IS',
    //       'IT',
    //       'JP',
    //       'LI',
    //       'LT',
    //       'LU',
    //       'LV',
    //       'MC',
    //       'MT',
    //       'MX',
    //       'MY',
    //       'NI',
    //       'NL',
    //       'NO',
    //       'NZ',
    //       'PA',
    //       'PE',
    //       'PH',
    //       'PL',
    //       'PT',
    //       'PY',
    //       'SE',
    //       'SG',
    //       'SK',
    //       'SV',
    //       'TR',
    //       'TW',
    //       'US',
    //       'UY'
    //     ],
    //     disc_number: 1,
    //     duration_ms: 364600,
    //     explicit: false,
    //     external_ids: {
    //       isrc: 'USEE10251081'
    //     },
    //     external_urls: {
    //       spotify: 'https://open.spotify.com/track/0zsZjXkbjrAJ3mlGhOgEI1'
    //     },
    //     href: 'https://api.spotify.com/v1/tracks/0zsZjXkbjrAJ3mlGhOgEI1',
    //     id: '0zsZjXkbjrAJ3mlGhOgEI1',
    //     name: 'Lady Of The North',
    //     popularity: 24,
    //     preview_url:
    //       'https://p.scdn.co/mp3-preview/cd35470113c01891298b204625349b3f7694df7c?cid=774b29d4f13844c495f206cafdad9c86',
    //     track_number: 8,
    //     type: 'track',
    //     uri: 'spotify:track:0zsZjXkbjrAJ3mlGhOgEI1'
    //   },
    //   played_at: '2018-09-17T19:18:32.841Z',
    //   context: null
    // }
    // ];
  }
});
