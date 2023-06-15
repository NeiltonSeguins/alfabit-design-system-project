import Avatar from "@/components/Avatar/Avatar";
import Dropdown from "@/components/Dropdown/Dropdown";
import Notice from "@/components/Notice/Notice";
import Switch from "@/components/Switch/Switch";
import Text from "@/components/Text/Text";
import TextBlock from "@/components/TextBlock/TextBlock";

const people: string[] = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const App = () => {
  return (
    <div className="h-screen mx-auto my-0 w-4/5 flex justify-center">
      <div className="w-2/4 flex flex-col gap-1 justify-start">
        <Text size="title3" className="mt-4">
          TextBlock
        </Text>

        <TextBlock title="Title" type="dark">
          Earth is the third planet from the Sun and the only astronomi cal
          object known to harbor life. According to radiometric dating
          estimation and other evidence, Earth formed over 4.5 billion years
          ago. Earth is the third planet from the Sun and the only astronomical
          object known to harbor life. According to radiometric dating
          estimation and other evidence, Earth formed over 4.5 billion years
          ago.
        </TextBlock>

        <Text size="title3" className="mt-4">
          Switch
        </Text>

        <Switch />

        <Text size="title3" className="mt-4">
          Dropdown
        </Text>

        <Dropdown list={people} />

        <Text size="title3" className="mt-4">
          Notice
        </Text>

        <Notice type="success" message="A operação foi um sucesso!" />
        <Notice type="alert" message="Este é um alerta!" />
        <Notice type="error" message="Ocorreu um erro durante a operação!" />

        <Text size="title3" className="mt-4">
          Avatar
        </Text>

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
