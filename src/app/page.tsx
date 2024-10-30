import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-wrap grow'>
      <h1 className="text-3xl ">Lorem ipsum dolor sit amet.</h1>
      <section >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ut illo
          expedita beatae perspiciatis nobis? Pariatur, ipsam incidunt ab sint
          maxime ut id itaque nam laudantium inventore expedita deleniti
          officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          sapiente ipsam beatae eius, cum reprehenderit, consequatur placeat
          cumque modi soluta qui nam, incidunt provident quod et maiores
          accusantium rem vero mollitia porro nesciunt. Eius iusto facere,
          accusamus explicabo consequatur, perspiciatis architecto similique
          veritatis asperiores aperiam odit autem voluptatum quas! Magni
          perspiciatis, doloribus unde, eveniet asperiores iure commodi
          provident veniam molestiae neque quam cum, culpa alias ut rem? Eum,
          saepe. Repellendus blanditiis doloremque amet cum placeat, facilis
          sequi excepturi distinctio aspernatur et nostrum officia ducimus
          inventore eos ratione modi vero libero maiores, enim atque nam
          praesentium aliquid commodi. Ad, impedit.
        </p>
      </section>
      <Image src="./globe.svg" alt="tut" width={300} height={300} />
    </main>
  );
}
