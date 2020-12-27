import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import apiServices from './apiServices/apiServices';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState('');

  const handleSearchSubmit = query => {
    if (searchQuery !== query) {
      setSearchQuery(query);
      setImages([]);
      setPage(1);
    }
  };

  const handleOpenLargeImage = imageUrl => {
    setShowModal(true);
    setLargeImage(imageUrl);
  };

  const handleAddPage = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    setLoading(true);
    apiServices
      .fetchImages(searchQuery, page)
      .then(data => {
        setImages(prevState => [...prevState, ...data.hits]);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }, [page, searchQuery]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const isButtonVisible = images.length > 0 && !loading;

  return (
    <div className={s.app}>
      <Searchbar onSearch={handleSearchSubmit} />
      <ImageGallery images={images} onOpenImage={handleOpenLargeImage} />
      <div className={s.boxSpinner}>
        <Loader loading={loading} />
      </div>
      {isButtonVisible && <Button onClick={handleAddPage} />}
      {showModal && <Modal onClose={toggleModal} largeImage={largeImage} />}
      <ToastContainer />
    </div>
  );
}
