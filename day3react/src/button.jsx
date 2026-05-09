function printHello(){
    console.log("hello!");
}

function handledbclick(){
    console.log("you double click");
}

export default function Button(){
    return(
        <div>
         <button onClick={printHello}>click me!</button>
         <p onDoubleClick={handledbclick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta rerum quia maiores, nemo exercitationem repudiandae perferendis ratione! Voluptatem asperiores sequi ratione sunt doloribus molestiae eum beatae iusto laudantium ex?</p>
        
        </div>
    )
}