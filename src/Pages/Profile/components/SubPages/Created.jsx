import { CategoryButton } from '../../styles/Button/CategoryButton';
import { CreatedForm } from '../../styles/Sections/CreatedForm';
import iconFile from '../../../../Ui/Img/icons/file.svg';
import { SelectInput } from '../../styles/Input/SelectInput';
import { Button } from '../../styles/Button/Button';

export default function Created() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '2.5rem 0',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <div style={{ width: '68rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '-3rem',
            gap: '0.5rem',
          }}
        >
          <h2 style={{ margin: '0', color: '#FFF' }}>Collections</h2>
          <h4 style={{ margin: '0', color: '#FFF' }}>Create collection</h4>
          <div style={{ display: 'flex' }}>
            <CategoryButton>Collection</CategoryButton>
            <CategoryButton transparent>image</CategoryButton>
          </div>
        </div>
      </div>
      <CreatedForm>
        <form>
          <div className="files-upload">
            <label htmlFor="media">
              <img src={iconFile} />
              <p>png, jpg, GIF, vídeo or any file up to 100mb</p>
              <span>browse</span>
              <input type="file" id="media" />
            </label>
          </div>
        </form>
        <div className="area-inputs">
          <div>
            <span>
              <label htmlFor="">Item name:</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="">Collection:</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="">Description:</label>
              <textarea type="text" />
            </span>
          </div>
          <div>
            <span>
              <label htmlFor="">External Link:</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="">Supply:</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="">Freeze metadata:</label>
              <input type="text" />
            </span>
          </div>
        </div>
        <Button
          style={{
            maxWidth: '16.4rem',
            height: '4rem',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            fontSize: '20px',
            borderRadius: '0.875rem',
            lineHeight: '30px',
          }}
          fullWidth
        >
          Create
        </Button>
      </CreatedForm>
    </div>
  );
}
