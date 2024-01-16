export function configUser(){
    const configUserBtn = document.getElementById("idconfigUserBtn");
    const divOpenConfig = document.querySelector(".open-config");

            divOpenConfig.classList.toggle("open-config-active");
            configUserBtn.classList.add("spin-gear");
            if(divOpenConfig.classList.contains("open-config-active")){
                setTimeout(() => {
                    configUserBtn.classList.remove("spin-gear");
                    divOpenConfig.classList.remove("open-config-active");
                }, 4000);
            }
}