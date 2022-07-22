export default function exit_preview(request, response){
    response.clearPreviewData();
    response.writeHead(307, {Location: '/'});
    response.end();
}
