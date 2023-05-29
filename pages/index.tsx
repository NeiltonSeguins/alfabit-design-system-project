import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";

const App = () => {
  return (
    <div>
      <Box rounded border>
        <Text size="xl" className="font-bold">Título da Caixa</Text>
        <Text>Conteúdo da caixa</Text>
      </Box>

      <Box filledBackground type="alert">
        <p>Este é um alerta!</p>
      </Box>

      <Box filledBackground type="success">
        <p>Operação concluída com sucesso!</p>
      </Box>

      <Box filledBackground type="error">
        <p>Ocorreu um erro durante a operação.</p>
      </Box>
    </div>
  );
};

export default App;
