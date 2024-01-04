const location = useLocation();
const [pathName, setPathName] = useState(null) ;

useEffect(() => {
    if(location) {
        let tmp = location.pathName.slice(location.pathName.lastIndexOf("/") , location.pathName.length) ;
        setPathName(tmp) ;
    }
}, [location])

