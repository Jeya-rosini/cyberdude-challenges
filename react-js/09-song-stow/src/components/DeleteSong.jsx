const DeleteSong = ({onClick}) => {

    return (
        <div>
            <button onClick={onClick} className="p-2 rounded bg-white font-semibold text-black hover:text-white hover:bg-red-500">
                Delete
</button>
        </div>
    )
}


export default DeleteSong