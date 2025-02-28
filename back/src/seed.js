import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  
    const users = await prisma.user.createMany({
        data: [
            { username: 'johndoe', password: 'securepassword1' },
            { username: 'janedoe', password: 'securepassword2' },
            { username: 'alice', password: 'securepassword3' },
            { username: 'bob', password: 'securepassword4' },
            { username: 'charlie', password: 'securepassword5' },
        ],
        skipDuplicates: true,
    });

    console.log('Utilisateurs créés');

  
    const userList = await prisma.user.findMany();

 
    const articles = await prisma.article.createMany({
        data: [
            { title: 'Mon premier article', content: 'Contenu du premier article', authorId: userList[0].id },
            { title: 'Article sur Prisma', content: 'Découverte de Prisma', authorId: userList[1].id },
            { title: 'JavaScript avancé', content: 'Comprendre les closures', authorId: userList[2].id },
            { title: 'Les bases de GraphQL', content: 'Pourquoi utiliser GraphQL ?', authorId: userList[3].id },
            { title: 'TypeScript pour les nuls', content: 'Introduction à TypeScript', authorId: userList[4].id },
        ],
    });

    console.log('Articles créés');

    const articleList = await prisma.article.findMany();

    const comments = await prisma.comment.createMany({
        data: [
            { content: 'Super article !', authorId: userList[1].id, articleId: articleList[0].id },
            { content: 'Merci pour cet article', authorId: userList[0].id, articleId: articleList[1].id },
            { content: 'Très bien expliqué', authorId: userList[3].id, articleId: articleList[2].id },
            { content: 'Intéressant !', authorId: userList[4].id, articleId: articleList[3].id },
            { content: 'J’adore ce sujet', authorId: userList[2].id, articleId: articleList[4].id },
        ],
    });

    console.log('Commentaires créés');


    const likes = await prisma.like.createMany({
        data: [
            { userId: userList[0].id, articleId: articleList[1].id },
            { userId: userList[1].id, articleId: articleList[2].id },
            { userId: userList[2].id, articleId: articleList[3].id },
            { userId: userList[3].id, articleId: articleList[4].id },
            { userId: userList[4].id, articleId: articleList[0].id },
        ],
    });

    console.log('Likes créés');

    console.log('📦 Seed terminé avec succès !');
}

seed()
    .catch(e => {
        console.error('Erreur lors du seed :', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
