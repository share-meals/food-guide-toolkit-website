import {getPageBySlug} from '../../lib/pages';

export default async function preview(request, response){
    const secret = request.query.secret;
    if(secret !== process.env.STRAPI_PREVIEW_SECRET ||
       !request.query.slug){
	return response
	    .status(401);
    }
    const slug = request.query.slug;
    const page = await getPageBySlug({slug, preview: true});
    if(!page){
	return response.status(404);
    }
    response.setPreviewData({});
    response.writeHead(307, {Location: `/${page.slug}`});
    response.end();
}
