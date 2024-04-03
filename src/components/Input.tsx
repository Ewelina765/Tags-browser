import TextField from "@mui/material/TextField";
import "../styles/input.css";

type InputProps = {
  tagsNumber: number;
  setTagsNumber: (value: number) => void;
  title: string;
};

const Input: React.FC<InputProps> = ({ tagsNumber, setTagsNumber, title }) => {
  return (
    <div className="input-div">
      <p>{title}</p>
      <TextField
        id="outlined-number"
        type="number"
        value={tagsNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTagsNumber(parseInt(e.target.value, 10) || 0)
        }
        color="warning"
        inputProps={{
          style: { border: "2px solid black", borderRadius: "4px" },
        }}
      />
    </div>
  );
};

export default Input;
