import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    // Créer des utilisateurs
    const user1 = await prisma.user.create({
        data: {
            username: 'johndoe',
            password: 'securepassword1', // Note: Stockez toujours les mots de passe de manière sécurisée
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'janedoe',
            password: 'securepassword2',
        },
    });

    console.log('Utilisateurs créés:', user1, user2);

    // Créer des articles
    const article1 = await prisma.article.create({
        data: {
            title: 'Mon premier article',
            content: 'Ceci est le contenu du premier article.',
            author: {
                connect: { id: user1.id },
            },
        },
    });

    const article2 = await prisma.article.create({
        data: {
            title: 'Un autre article',
            content: 'Ceci est le contenu d\'un autre article.',
            author: {
                connect: { id: user2.id },
            },
        },
    });

    console.log('Articles créés:', article1, article2);

    // Créer des commentaires
    const comment1 = await prisma.comment.create({
        data: {
            content: 'Super article !',
            author: {
                connect: { id: user2.id },
            },
            article: {
                connect: { id: article1.id },
            },
        },
    });

    const comment2 = await prisma.comment.create({
        data: {
            content: 'Merci pour cet article informatif.',
            author: {
                connect: { id: user1.id },
            },
            article: {
                connect: { id: article2.id },
            },
        },
    });

    console.log('Commentaires créés:', comment1, comment2);

    // Créer des likes
    const like1 = await prisma.like.create({
        data: {
            user: {
                connect: { id: user1.id },
            },
            article: {
                connect: { id: article2.id },
            },
        },
    });

    const like2 = await prisma.like.create({
        data: {
            user: {
                connect: { id: user2.id },
            },
            article: {
                connect: { id: article1.id },
            },
        },
    });

    console.log('Likes créés:', like1, like2);
}

seed()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
