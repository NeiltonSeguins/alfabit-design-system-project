import Avatar from "@/components/Avatar/Avatar";
import Box from "@/components/Box/Box";
import Button from "@/components/Button/Button";
import Divider from "@/components/Divider/Divider";
import Notice from "@/components/Notice/Notice";
import Text from "@/components/Text/Text";

const App = () => {
  return (
    <div className="mx-auto my-0 w-4/5 flex justify-center">
      <div className="w-2/4 flex flex-col justify-center gap-1">
        <Divider>
          <Text size="title3">Text Block</Text>
        </Divider>

        <Box className="p-5 bg-slate-200" rounded>
          <Text size="xl" className="font-black">
            Title
          </Text>
          <Text size="sm">
            Earth is the third planet from the Sun and the only astronomi cal
            object known to harbor life. According to radiometric dating
            estimation and other evidence, Earth formed over 4.5 billion years
            ago. Earth is the third planet from the Sun and the only
            astronomical object known to harbor life. According to radiometric
            dating estimation and other evidence, Earth formed over 4.5 billion
            years ago.
          </Text>
        </Box>

        <Divider>
          <Text size="title3">Notice</Text>
        </Divider>

        <Notice type="success" message="A operação foi um sucesso!" />
        <Notice type="alert" message="Este é um alerta!" />
        <Notice type="error" message="Ocorreu um erro durante a operação!" />

        <Divider>
          <Text size="title3">Avatar</Text>
        </Divider>

        <div className="w-full flex items-center justify-evenly p-3 rounded-sm bg-slate-500">
          <Avatar />
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar size="lg" />
        </div>
      </div>
    </div>
  );
};

export default App;
