// import type { NextApiRequest, NextApiResponse } from 'next'
// import { client } from '../../../utils/client';
// import { allPostsQuery } from '../../../utils/queries'

// type Data = {
//   name: string
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'GET') {
//     const query = allPostsQuery();

//     const data = await client.fetch(query);

//     res.status(200).json(data);
//   } else if (req.method === 'POST') {
//     const document = req.body;

//     await client.create(document)
//       .then(() => {
//         res.status(201).json('Video Created')
//     });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';

import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    console.log('here post');
    
    const doc = req.body;

    client.create(doc).then(() => {
      res.status(201).json('video created');
    });
  }
}