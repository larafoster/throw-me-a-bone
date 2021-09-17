import { useNavigate } from 'react-router-dom';

function BackBtn() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default BackBtn;