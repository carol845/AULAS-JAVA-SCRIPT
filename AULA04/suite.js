// avaliação de atendimento.

// Ótimo :D - 1
// Bom - 2
// Regular : / - 3
// Ruim :( 4
// Péssimo >:( - 5
let avaliar_atendimento = Number(prompt('prompt avalie nosso atendimento:0 -5'))
switch (avaliar_atendimento) {
    case 1:
        console.log('O atendimento foi avaliado como: otimo');
        break;

     case 2:
        console.log('O atendimento foi avaliado como: Boa');
        break;

         case 3:
        console.log('O atendimento foi avaliado como:Iregular');
        break;
        
         case 4:
        console.log('O atendimento foi avaliado como:Ruim');
        break;

         case 5:
        console.log('O atendimento foi avaliado como:Péssimo');
        break;
    default:
        console.log('Atendimento foi enviado');
        break;
}