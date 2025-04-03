import { PrismaClient } from '@prisma/client'
import { fakerKO as faker } from '@faker-js/faker'



const prisma=new PrismaClient()

async function seedUser (){
    Array.from({length:10}, (v,i)=>i).forEach(async()=>{
        const userData={
            name:faker.person.firstName()+faker.person.lastName(),
            email:faker.internet.email(),
            image:faker.image.avatar()
        }
        const res=await prisma.user.create({
            data:userData
        })
        console.log(res)
    })
}

async function seedStocks(){
    const totalUser=await prisma.user.findMany()

    if(totalUser?.length>1){
        Array.from({length:20}, (v,i)=>i).forEach(async()=>{
            const randomUserIndex=Math.floor(Math.random()*totalUser.length)
            const randomUser=totalUser[randomUserIndex]
        
            const stockData={
                title:faker.lorem.words(),
                lat:getRandomLatitude(),
                lng:getRandomLongtitude(),
                desc:faker.lorem.paragraphs(),
                tags:faker.word.noun(),
                price:parseInt(faker.commerce.price({
                    min:500000,max:500000000, dec:0
                })),
                userId:randomUser.id,
                images:[
                    faker.image.urlLoremFlickr(
                    {
                        category:'nature',
                        width:500,
                        height:600
                    }),
                    faker.image.urlLoremFlickr(
                    {
                        category:'animal',
                        width:500,
                        height:600
                    }),
                    faker.image.urlLoremFlickr(
                    {
                        category:'graphic',
                        width:500,
                        height:600
                    })
                ]
            }

            const res=await prisma.stock.create({
                data:stockData
            })

            console.log(res)
        })
    }
}

function getRandomLatitude(){
    const minLatitude=37.4316
    const maxLatitude=37.701

    return faker.number.float({
        min:minLatitude,
        max:maxLatitude,
        //precision:0.0000001
    })
    ?.toString()
}

function getRandomLongtitude(){
    const minLongtitude=126.7963
    const maxLongtitude=127.18391

    return faker.number.float({
        min:minLongtitude,
        max:maxLongtitude,
        //precision:0.0000001
    })
    ?.toString()}




async function seedFaq () {
    const totalUser=await prisma.user.findMany()
    Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
        const randomUserIndex=Math.floor(Math.random()*totalUser.length)
        const randomUser=totalUser[randomUserIndex]

        const faqData = {
          title: faker.lorem.words(),
          desc: faker.lorem.paragraph(),
          userId:randomUser.id
        }
    
        const res = await prisma.faq.create({
            data: faqData,
          })
    
        console.log(res)
      })
}

async function main() {
    await seedUser()
    await seedStocks()
    await seedFaq()
}

main()
.then(async()=>{
    await prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e)
})