'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './cancerDeMama.module.css';
import { HeaderLogin } from '@/components/headerlogin/headerLogin';

export default function CancerDeMama() {
    const [activeTab, setActiveTab] = useState('home-tab-pane');
    const [imageDataUrl, setImageDataUrl] = useState('');
    const imageInputRef = useRef(null);
    const imageContainerRef = useRef(null);
    const newImageContainerRef = useRef(null);

    const handleTabClick = (targetId) => {
        setActiveTab(targetId);
    };

    const handleFileUpload = () => {
        imageInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageDataUrl(e.target.result);
                imageContainerRef.current.style.display = 'flex';
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImageDataUrl('');
        imageContainerRef.current.style.display = 'none';
        imageInputRef.current.value = '';
    };

    const handleSendButtonClick = () => {
        if (imageDataUrl) {
            const newImageContainer = document.createElement('div');
            newImageContainer.style.display = 'flex';
            newImageContainer.style.flexDirection = 'column';
            newImageContainer.style.alignItems = 'center';
            newImageContainer.style.gap = '20px';
            newImageContainer.style.marginTop = '20px';

            newImageContainer.innerHTML = `
                <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 20px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin-top:100px">
                        <img src="${imageDataUrl}" alt="Uploaded Image" style="max-width: 400px; max-height: 400px; border: 1px solid #ddd; border-radius: 4px;">
                        <button class="button download-image" style="padding: 12px 0; background-color: #136a02; width: 80px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease;">Download</button>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin-top:100px">
                        <img src="${imageDataUrl}" alt="Uploaded Image" style="max-width: 400px; max-height: 400px; border: 1px solid #ddd; border-radius: 4px;">
                        <button class="button download-image" style="padding: 12px 0; background-color: #136a02; width: 80px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease;">Download</button>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 100%; box-sizing: border-box;">
                        <form class="image-form" style="display: flex; flex-direction: column; width: 100%; box-sizing: border-box;">
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-ki67" style="width: 180px; margin-right: 10px;">IA KI67:</label>
                                    <input type="text" name="ia-ki67" value="0.08" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-total-cells" style="width: 180px; margin-right: 10px;">IA Total Cells:</label>
                                    <input type="number" name="ia-total-cells" value="112" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-positive-cells" style="width: 180px; margin-right: 10px;">IA Positive Cells:</label>
                                    <input type="number" name="ia-positive-cells" value="9" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-negative-cells" style="width: 180px; margin-right: 10px;">IA Negative Cells:</label>
                                    <input type="number" name="ia-negative-cells" value="103" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ki67" style="width: 180px; margin-right: 10px;">KI67:</label>
                                    <input type="number" name="ki67" value="4" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="total-cells" style="width: 180px; margin-right: 10px;">Total Cells:</label>
                                    <input type="number" name="total-cells" value="3" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="positive-cells" style="width: 180px; margin-right: 10px;">Positive Cells:</label>
                                    <input type="number" name="positive-cells" value="2" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="negative-cells" style="width: 180px; margin-right: 10px;">Negative Cells:</label>
                                    <input type="number" name="negative-cells" value="1" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-ki67" style="width: 180px; margin-right: 10px;">Wrong KI67:</label>
                                    <input type="text" name="wrong-ki67" placeholder="Enter New KI67" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-total-cells" style="width: 180px; margin-right: 10px;">Wrong Total Cells:</label>
                                    <input type="text" name="wrong-total-cells" placeholder="Enter New Total Cells" style="flex: 1; padding: 8px;border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-positive-cells" style="width: 180px; margin-right: 10px;">Wrong Positive Cells:</label>
                                    <input type="text" name="wrong-positive-cells" placeholder="Enter New Positive Cells" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-negative-cells" style="width: 180px; margin-right: 10px;">Wrong Negative Cells:</label>
                                    <input type="text" name="wrong-negative-cells" placeholder="Enter New Negative Cells" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                        </form>
                        <div style="display: flex; gap: 10px; margin-top: 20px;">
                            <button class="button delete-result" style="padding: 12px 0; background-color: #e87917; width: 110px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; margin-left: 50px;">Delete Result</button>
                            <button class="button update-results" style="padding: 12px 0; background-color: #136a02; width: 110px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; margin-left: 20px;">Update Results</button>
                        </div>
                    </div>
                </div>
            `;

            newImageContainerRef.current.appendChild(newImageContainer);
            newImageContainerRef.current.style.display = 'block';

            setImageDataUrl('');

            newImageContainer.querySelector('.download-image').addEventListener('click', (event) => {
                const imgElement = event.target.previousElementSibling;
                const link = document.createElement('a');
                link.href = imgElement.src;
                link.download = 'image.png';
                link.click();
            });

            newImageContainer.querySelector('.delete-result').addEventListener('click', () => {
                newImageContainer.remove();
            });

            newImageContainer.querySelector('.update-results').addEventListener('click', () => {
                // Logic for updating results
            });

            imageContainerRef.current.style.display = 'none';
            imageInputRef.current.value = '';
        } else {
            alert('No ha seleccionado ninguna imagen, primero seleccione una imagen para cargarla.');
        }
    };

    useEffect(() => {
        // Add any additional initialization logic here if needed
    }, []);

    return (
            <main className={styles.main}>
                <div className={styles.tabs}>
                    <button className={`${styles.tabButton} ${activeTab === 'home-tab-pane' ? styles.active : ''}`} onClick={() => handleTabClick('home-tab-pane')}>KI67</button>
                    <button className={`${styles.tabButton} ${activeTab === 'profile-tab-pane' ? styles.active : ''}`} onClick={() => handleTabClick('profile-tab-pane')}>HER2</button>
                    <button className={`${styles.tabButton} ${activeTab === 'contact-tab-pane' ? styles.active : ''}`} onClick={() => handleTabClick('contact-tab-pane')}>Estrógeno</button>
                    <button className={`${styles.tabButton} ${activeTab === 'disabled-tab-pane' ? styles.active : ''}`} onClick={() => handleTabClick('disabled-tab-pane')}>Progesterona</button>
                </div>
                <div className={`${styles.tabContent} ${activeTab === 'home-tab-pane' ? styles.active : ''}`} id="home-tab-pane">
                    <div className={styles.buttons}>
                        <button className={styles.button} id="upload-button" onClick={handleFileUpload}>Upload Images</button>
                        <input type="file" id="image-input" ref={imageInputRef} accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
                        <div id="image-container" className={styles.imageContainer} ref={imageContainerRef} style={{ display: 'none' }}>
                            <button className={styles.button} id="delete-button" onClick={handleDeleteImage}>Delete</button>
                            <Image id="uploaded-image" src={imageDataUrl} alt="Uploaded Image" className={styles.uploadedImage} layout="responsive" width={533} height={400} />
                        </div>
                        <button className={styles.button} id="send-button" onClick={handleSendButtonClick}>Send</button>
                    </div>
                    <div id="new-image-container" ref={newImageContainerRef}></div>
                </div>
                <div className={`${styles.tabContent} ${activeTab === 'profile-tab-pane' ? styles.active : ''}`} id="profile-tab-pane">
                    <h2>Coming soon...</h2>
                </div>
                <div className={`${styles.tabContent} ${activeTab === 'contact-tab-pane' ? styles.active : ''}`} id="contact-tab-pane">
                    <h2>Coming soon...</h2>
                </div>
                <div className={`${styles.tabContent} ${activeTab === 'disabled-tab-pane' ? styles.active : ''}`} id="disabled-tab-pane">
                    <h2>Coming soon...</h2>
                </div>
            </main> 
    );
}


/*

<div style={{display: 'flex', flexDirection: 'row' , alignItems: 'flex-start', gap: '20px'}}>
                    <div style={{display: 'flex', flexDirection: 'column' , alignItems: 'center', gap: '20px', marginTop: '100px'}}>
                        <Image src='${imageDataUrl}' alt="Uploaded Image" layout="responsive" width={400} height={400} style={{border: '1px solid #ddd',borderRadius: '4px'}}/>
                        <button className={styles.button} class="download-image" style={{padding: '12px 0', backgroundColor: '#136a02' , width: '80px', color: 'white' , border: 'none' , borderRadius: '4px', cursor: 'pointer' , transition: 'background-color 0.3s ease'}}>Download</button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column' , alignItems: 'center', gap: '20px', marginTop: '100px'}}>
                        <Image src='${imageDataUrl}' alt="Uploaded Image" layout="responsive" width={400} height={400} style={{border: '1px solid #ddd',borderRadius: '4px'}}/>
                        <button className={styles.button} class="download-image" style={{padding: '12px 0', backgroundColor: '#136a02' , width: '80px', color: 'white' , border: 'none' , borderRadius: '4px', cursor: 'pointer' , transition: 'background-color 0.3s ease'}}>Download</button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column' , width: '100%', boxSizing: 'border-box'}}>

                        <<form class="image-form" style={{display: 'flex', flexDirection: 'column', width: '100%' , boxSizing: 'border-box'}}></form>
                            <div style={{display: 'flex', alignItems: 'center' , marginBottom: '10px'}}>
                                    <label for="ia-ki67" style={{width: '180px', margin-right: '10px'}}>IA KI67:</label>
                                    <input type="text" name="ia-ki67" value="0.08" style={{flex: '1', padding: '8px', borderRadius: '6px'}} readonly>
                                </div>
                                <div style={{display: flex; align-items: 'center' , marginBottom: '10px'}}>
                                    <label for="ia-total-cells" style="width: 180px; margin-right: 10px;">IA Total Cells:</label>
                                    <input type="number" name="ia-total-cells" value="112" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-positive-cells" style="width: 180px; margin-right: 10px;">IA Positive Cells:</label>
                                    <input type="number" name="ia-positive-cells" value="9" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ia-negative-cells" style="width: 180px; margin-right: 10px;">IA Negative Cells:</label>
                                    <input type="number" name="ia-negative-cells" value="103" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="ki67" style="width: 180px; margin-right: 10px;">KI67:</label>
                                    <input type="number" name="ki67" value="4" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="total-cells" style="width: 180px; margin-right: 10px;">Total Cells:</label>
                                    <input type="number" name="total-cells" value="3" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="positive-cells" style="width: 180px; margin-right: 10px;">Positive Cells:</label>
                                    <input type="number" name="positive-cells" value="2" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="negative-cells" style="width: 180px; margin-right: 10px;">Negative Cells:</label>
                                    <input type="number" name="negative-cells" value="1" style="flex: 1; padding: 8px; border-radius: 6px;" readonly>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-ki67" style="width: 180px; margin-right: 10px;">Wrong KI67:</label>
                                    <input type="text" name="wrong-ki67" placeholder="Enter New KI67" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-total-cells" style="width: 180px; margin-right: 10px;">Wrong Total Cells:</label>
                                    <input type="text" name="wrong-total-cells" placeholder="Enter New Total Cells" style="flex: 1; padding: 8px;border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-positive-cells" style="width: 180px; margin-right: 10px;">Wrong Positive Cells:</label>
                                    <input type="text" name="wrong-positive-cells" placeholder="Enter New Positive Cells" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <label for="wrong-negative-cells" style="width: 180px; margin-right: 10px;">Wrong Negative Cells:</label>
                                    <input type="text" name="wrong-negative-cells" placeholder="Enter New Negative Cells" style="flex: 1; padding: 8px; border-radius: 6px;">
                                </div>
                        </form>
                        <div style="display: flex; gap: 10px; margin-top: 20px;">
                            <button class="button delete-result" style="padding: 12px 0; background-color: #e87917; width: 110px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; margin-left: 50px;">Delete Result</button>
                            <button class="button update-results" style="padding: 12px 0; background-color: #136a02; width: 110px; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; margin-left: 20px;">Update Results</button>
                        </div>
                    </div>
                </div>

*/