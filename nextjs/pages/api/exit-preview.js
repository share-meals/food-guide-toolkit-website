export default function handler(req, res){
    res.clearPreviewData();
    res.status(200).end();
}
