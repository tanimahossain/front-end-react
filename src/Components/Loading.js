import Modal from 'react-modal';
import HashLoader from 'react-spinners/HashLoader';
import '../App.css';
Modal.setAppElement('#root');
function Loading({ loading }) {
    return (
        <Modal
            isOpen={loading}
            style={{
                overlay: {
                    position: 'absolute',
                    top: 60,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '1000px',
                    alignItems: 'center',
                    alignContent: 'center',
                    marginLeft: 'auto',
                    marginReft: 'auto',
                    backgroundColor:
                        'rgba(255, 255, 255, 0.75)',
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    height: '500px',
                    alignItems: 'center',
                    alignContent: 'center',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                },
            }}
        >
            <div className="Loading">
                <h1 className="Loading"> Loading... </h1>
                <HashLoader
                    size={150}
                    color={'#123abc'}
                    loading={true}
                />
            </div>
        </Modal>
    );
}
export default Loading;
