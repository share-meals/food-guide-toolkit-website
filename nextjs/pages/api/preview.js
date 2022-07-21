import {getPagePreview} from '../../lib/pages';

export default async function handler(req, res){
    const slug = req.query.slug;
    res.setPreviewData({});
    const post = await getPagePreview(slug);
    console.log(post);
    res.end(`your slug is: ${slug}`);
}
