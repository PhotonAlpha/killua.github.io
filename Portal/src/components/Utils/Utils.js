import Trianglify from 'trianglify';

export default function (wid = 200, hei = 200, minimalSize = 60) {
    const url = Trianglify({
        width: wid,
        height: hei,
        cell_size: (Math.random() * 30) + minimalSize,
        x_colors: 'random',
        y_colors: 'random'
    }).png();
    return url;
}

export function _reconstructorTree(message) {
    const pattern = /^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}/;
    let blogdatas = [];
    if(message && message.length > 0) {
        const items = message;
        blogdatas = items.filter(item => {
            const name = item.name;
            const match = pattern.exec(name);
            if(match){
                return true;
            }else{
                return false;
            }
        }).map(item => {
            const name = item.name;
            const match = pattern.exec(name);
            const blogname = name.substring(match[0].length+1, name.length).replace('.md','');
            return {
                name: blogname,
                date: Date.parse(match[0]),
                path: item.path,
                git_url: item.git_url,
                sha: item.sha
            }
        });
        blogdatas.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }
    return blogdatas;
}

export const REACTJS='frontend/ReactJS';
export const GRAPHQL='frontend/GraphQL';
export const SPRING_BOOT='backend/SpringBoot';
export const SPRING_CLOUD='backend/SpringCloud';
export const DOCKER='backend/Docker';

const client_id = '22f33b7f43ec9ae6d0c9';
const redirect_uri = 'http://localhost:4200/auth';
export const AUTHURL=` https://github.com/login/oauth/authorize?client_id=${client_id}&scope=public_repo&redirect_uri=${redirect_uri}`;
const t = 'NmQ4ZGEyMDQ4ZmY3ODAyZjc1ZDViZGRmMTcwNjBjNWQ1NDU5NWRkZg==';
export const TEMP_TOKEN = `access_token=`+Base64.decode(t);
export const TEMP_TOKEN_AUTH = Base64.decode(t);