import {useLocation, useParams} from "react-router-dom";
import React, {useCallback, useRef, useState} from "react";
import useAlbumFetch from "../hooks/useAlbumFetch";

const Albums = () => {

    const [offset, setOffset] = useState(0);
    const params = useParams();
    let {state} = useLocation();
    console.log(state.name);
    const {
        albums,
        hasMore,
        loading,
    } = useAlbumFetch(params.artist, offset);

    const observer = useRef()
    const lastAlbumElementRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 20)
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore])

    return (
        <>
            <div className="flex flex-col items-start">
                <h2 className="text-3xl font-bold text-gray-900">{state.name}</h2>
                <h4 className="text-gray-400">Albums</h4>
            </div>
            <div
                className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {albums.map((album, index) => {
                    const artistsNames = album.artists.map(artist => artist.name).join(", ")
                    return (
                        <div ref={albums.length === index + 1 ? lastAlbumElementRef : null} key={album.id}
                             className="bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                                <img src={album.images[0]?.url ? album.images[0].url : '/no-image.webp'}
                                     alt={album.name}
                                     className="object-cover object-center"/>
                                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                                     aria-hidden="true">
                                    <div
                                        className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                        Preview on Spotify
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-4 flex flex-col items-start">
                                <h3 className="text-base font-medium text-gray-900">
                                    <a href={album.external_urls.spotify} target="_blank">
                                        <span aria-hidden="true" className="absolute inset-0"/>
                                        {album.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-500">{artistsNames}</p>
                                <p className="text-sm text-gray-500">{album.release_date}</p>
                                
                            </div>
                            <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-900">{album.total_tracks} Tracks</p>
                    <div
                        className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter group-hover:opacity-100"
                        aria-hidden="true"
                    >
                        <a href={album.external_urls.spotify} target="_blank">
                            Preview on Spotify
                        </a>
                    </div>
                </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Albums;